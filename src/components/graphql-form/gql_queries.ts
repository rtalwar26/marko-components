export let mutation_query = (mutation: string, fields: any[]): string => {
  let param_str = fields.map((f) => `$${f.name}:${f.type.name}`).join(',');
  let inner_param_str = fields.map((f) => `${f.name}:$${f.name}`).join(',');
  `$to: String, $from: String, $subject: String, $template: String, $data: String`;
  return `mutation mutation_query(${param_str}){
            ${mutation}(${inner_param_str}){
              code
              success
              message
            }}`
}
export let schema_query = (type: string): string => {

  return `{
  __type(name:"${type}") {
    name
    description
    kind
    fields {
      description
      deprecationReason
      name 
      args {
        name
        description
        defaultValue
        
        type {
          name
          description
        }
      }
      
    }
  }
}`;

}