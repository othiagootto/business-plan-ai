import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nkvcbkqclfrourzwevxp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rdmNia3FjbGZyb3VyendldnhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyNjYwNzEsImV4cCI6MjA2Njg0MjA3MX0.hZilwVB6C1iY2zbRqCGeakAuJAdi4I740gBP8vp93PY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)