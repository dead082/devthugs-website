<?php

namespace App\Http\Controllers;

<<<<<<< HEAD
use App\Mail\ContactMessage;
=======
use App\Mail\ContactFormSubmission;
>>>>>>> 48ee3bd69af3cb5f67c38b3d8b725328e13026e7
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
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

<<<<<<< HEAD
        // Send email to DevThugs official email
        Mail::to('devthugscompanyofficial@gmail.com')->send(new ContactMessage($validated));

        // Log the submission
        logger()->info('Contact form submission', $validated);
=======
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
>>>>>>> 48ee3bd69af3cb5f67c38b3d8b725328e13026e7

        return redirect()
            ->route('contact')
            ->with('contact_success', true);
    }
}
