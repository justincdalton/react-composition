
## Flattened structure

- Able to see all of the UI components from the top level
- Avoids jumping through a bunch of files to find specific UI components
- Avoids prop drilling because most components are only 1 or 2 levels deep

## Containers and layouts

**The first question to ask is: Do I need this?**
- If the container is only there for data related logic then a hook is a better abstraction

**If you do need it:**
- Keep the render content as minimal as possible
- Always render children
- Use it in the component it's containing
