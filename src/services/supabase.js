import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qenxbykcdxmsadiedxjz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlbnhieWtjZHhtc2FkaWVkeGp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwNTk4NjQsImV4cCI6MjAyNjYzNTg2NH0.7poUlZA1kvZZHaPZU6QVtBnYWd4fRpGC5QE_UG44e2w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
