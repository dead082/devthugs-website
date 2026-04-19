<?php

namespace App\Http\Controllers;

use App\Mail\ContactFormSubmission;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function index(): View
    {
        return view('pages.contact');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'subject' => ['required', 'string', 'max:255'],
            'message' => ['required', 'string', 'max:5000'],
        ]);

        try {
            Mail::to('devthugscompanyofficial@gmail.com')->send(
                new ContactFormSubmission($validated)
            );
        } catch (\Throwable $exception) {
            logger()->error('Contact form email failed', [
                'error' => $exception->getMessage(),
                'data' => $validated,
            ]);

            return redirect()
                ->route('contact')
                ->withInput()
                ->with('contact_error', 'Unable to send your message right now. Please try again later.');
        }

        return redirect()
            ->route('contact')
            ->with('contact_success', true);
    }
}
