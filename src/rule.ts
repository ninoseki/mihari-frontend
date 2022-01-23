export const RULE_TEMPLATE = `title: ... # String (required)
description: ... # String (required)

id: ... # String (optional)
author: ... # String (optional)
created_on: ... # Date (optional)
updated_on: ... # Date (optional)

tags: [] # Array<String> (Optional, defaults to [])
allowed_data_types: # Array<String> (Optional, defaults to ["hash", "ip", "domain", "url", "mail"])
  - hash
  - ip
  - domain
  - url
  - mail
disallowed_data_values: [] # Array<String> (Optional, defaults to [])

ignore_old_artifacts: true # Whether to ignore old artifacts from checking or not (Optional, defaults to true)
ignore_threshold: 0 # Number of days to define whether an artifact is old or not (Optional, defaults to 0)

queries: # Array<Hash> (required)
  - analyzer: shodan # String (required)
    query: ... # String (required)`;
