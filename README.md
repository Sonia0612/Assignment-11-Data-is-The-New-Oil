# Assignment10-Jo-DIkta-Hai_Wo-Bikta-Hai
## Theory

Qn1.What is Prop Drilling?
- Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level.
- Prop drilling is the process of passing down data or state through multiple layers of a component hierarchy


Qn2.What is lifting the state up?

- Sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “lifting state up".
- Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as lifting state up. eg.Accordion
- We lift the state up to make the parent state a single shared state and a sole "source of truth" and pass the parent's data to its children.


Qn3. What are Context Provider and Context Consumer?

- 1. The provider is used to create a context that can be consumed.
- 2. The consumer is used to consume the nearest provided context.
- In functional components, we can use UseState Hook to consume the context.

# class based components-
- const MyContext = React.createContext(/* some value */);
- MyContext.displayName = 'MyDisplayName';
- <MyContext.Provider> 
- <MyContext.Consumer>

# functional components-
- const MyContext = React.createContext(/* some value */);
- MyContext.displayName = 'MyDisplayName';
- <MyContext.Provider> 
- const {value}=useState(MyContext)

Qn4. If you don't pass a value to the provider does it take the default value?

- Yes, if we don't  pass a value to the provider ,it will take the default value.
- The defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This can be helpful for testing components in isolation without wrapping them.
