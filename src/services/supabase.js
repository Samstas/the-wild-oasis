import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vsbcotkuezohlkfqdyod.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzYmNvdGt1ZXpvaGxrZnFkeW9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4Njk0NDMsImV4cCI6MjAxMjQ0NTQ0M30.vSKa5FW6tPYOrEeR9uPvWhGm7oMHDMIjELmCIQBE4_s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
