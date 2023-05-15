import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bxxzlvqbuuvffmtrfloy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4eHpsdnFidXV2ZmZtdHJmbG95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcwNjA4OTcsImV4cCI6MTk5MjYzNjg5N30.7YENzYWJ56k9dz60Roc8gLR7zaEHz3UAKbACMfIgU3M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
