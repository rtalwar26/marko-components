"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutation_query = (mutation, fields) => {
    let param_str = fields.map((f) => `$${f.name}:${f.type.name}`).join(',');
    let inner_param_str = fields.map((f) => `${f.name}:$${f.name}`).join(',');
    `$to: String, $from: String, $subject: String, $template: String, $data: String`;
    return `mutation mutation_query(${param_str}){
            ${mutation}(${inner_param_str}){
              code
              success
              message
            }}`;
};
exports.schema_query = (type) => {
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
};
