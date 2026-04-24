<?php

use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::statement("ALTER TYPE chat_messages_source_type_enum ADD VALUE IF NOT EXISTS 'greeting' BEFORE 'faq';");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Update any 'greeting' values to NULL (or handle as needed)
        DB::statement("UPDATE chat_messages SET source_type = NULL WHERE source_type = 'greeting';");

        // Recreate the enum without 'greeting' (PostgreSQL doesn't allow direct removal)
        DB::statement("
            ALTER TABLE chat_messages ALTER COLUMN source_type TYPE VARCHAR(255);
            DROP TYPE IF EXISTS chat_messages_source_type_enum;
            CREATE TYPE chat_messages_source_type_enum AS ENUM ('faq', 'company', 'ai', 'fallback');
            ALTER TABLE chat_messages ALTER COLUMN source_type TYPE chat_messages_source_type_enum USING source_type::text::chat_messages_source_type_enum;
        ");
    }
};
