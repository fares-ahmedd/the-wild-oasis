import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wlxgverwozlrneawceqe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndseGd2ZXJ3b3pscm5lYXdjZXFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcyOTk2MjIsImV4cCI6MjAzMjg3NTYyMn0.zpet--oTfEVXVODnjUmglZufeAv8Q7UI8fYe_jzqe_k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
