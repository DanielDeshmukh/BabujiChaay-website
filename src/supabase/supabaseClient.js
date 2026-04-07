import {createClient } from '@supabase/supabase-js';

// import VITE_SUPABASE_ANON_KEY and VITE_SUPABASE_URL from .env file

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

 const supabase = createClient(supabaseUrl, supabaseAnonKey);

 export default supabase;