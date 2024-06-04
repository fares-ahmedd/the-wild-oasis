import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wlxgverwozlrneawceqe.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE;
console.log(supabaseKey);
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
