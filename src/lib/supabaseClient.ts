import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://jwbkjayjkcnjhljlfkcl.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3YmtqYXlqa2Nuamhsamxma2NsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxNzgwNjUsImV4cCI6MjA0Nzc1NDA2NX0.xu9v-SM1jr13ZYBDBpwimmw5-awcrQzg891sJWDaaY8";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
