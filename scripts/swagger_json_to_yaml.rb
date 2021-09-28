require "http"
require "json"
require "yaml"

def recursive_delete(hash, to_remove)
  hash.delete(to_remove)
  hash.each_value do |value|
    recursive_delete(value, to_remove) if value.is_a? Hash
  end
end

res = HTTP.get("http://localhost:9292/api/swagger_doc")
data = JSON.parse(res.body.to_s)

keys_to_remove = ["host", "operationId"]
keys_to_remove.each do |key|
  recursive_delete data, key
end

puts data.to_yaml
