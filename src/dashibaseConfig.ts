import { Page, Attribute, AttributeType, Config } from './utils/config'

// Change this to build your own dashboard - see `utils/config.ts` for documentation

const DASHIBASE_CONFIG:Config = {
  name: "My Dashboard",
  supabase_url: "https://YOUR_SUPABASE_URL.supabase.co",
  supabase_anon_key: "YOUR_SUPABASE_ANON_KEY",
  pages: [
    {
      name: "My Page",
      page_id: "my_page",
      table_id: "my_table",
      mode: "list",
      attributes: [
        {
          id: "value",
          label: "Value",
          required: false,
          readonly: false,
          type: AttributeType.Text,
        } as Attribute,
        {
          // Enum example - this will generate a dropdown with the provided options
          id: "foo",
          label: "Foo",
          required: false,
          readonly: false,
          type: AttributeType.Enum,
          enumOptions: ['foo', 'bar'], // Specify enum options
        } as Attribute,
      ]
    },
  ] as Page[],
}

export default DASHIBASE_CONFIG
