# Main goal
`remove-specific-request-for-location` allows you to remove a GES request from an existing Primo-VE environment for all locations except for specific Locations and Libraries.

The configuration allowed is:

- `libraryCode` is the libraries where the link will appear (can be a single library or a list of libraries with ',' for separation).
- `subLocationCode` is the locations in the libraries where the link will appear (can be a single library or a list of libraries with ',' for separation).
- `displayLabel` is the title that Primo-VE shows for this link. e.g. 'This item in Amazon2'.