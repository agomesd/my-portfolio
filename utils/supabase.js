import { createClient } from '@supabase/supabase-js';

const options = {
  schema: 'public',
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true
}

export const supabase = createClient("https://ijkrwbteuwxmecwrqsnf.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODk2OTE5MSwiZXhwIjoxOTU0NTQ1MTkxfQ.e4ySB7PmEGxAtpFIog6au-8-K5EqVVXPzobD9ZlCLXI", options)
