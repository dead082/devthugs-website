<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::statement("ALTER TABLE chat_messages MODIFY COLUMN source_type ENUM('greeting', 'faq', 'company', 'ai', 'fallback') NULL;");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Update any 'greeting' values to NULL (or handle as needed)
        DB::statement("UPDATE chat_messages SET source_type = NULL WHERE source_type = 'greeting';");

        // Alter the column back to the original enum
        DB::statement("ALTER TABLE chat_messages MODIFY COLUMN source_type ENUM('faq', 'company', 'ai', 'fallback') NULL;");
    }
};
