import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jwbkjayjkcnjhljlfkcl.supabase.co'; // Replace with your Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3YmtqYXlqa2Nuamhsamxma2NsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxNzgwNjUsImV4cCI6MjA0Nzc1NDA2NX0.xu9v-SM1jr13ZYBDBpwimmw5-awcrQzg891sJWDaaY8'; // Replace with your Supabase anon key

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
