// Exercise 1) Primitives and arrays

// TODO: remove the "any" type, and add a concerete type for these basic primitives
// How they are working, if you remove all type definitions? How inference is working here?

let price: any /* add the correcy type annotation here instead of any */
price = 100.5

let title: any /* add type annotation here */
title = "How to Hack NASA with HTML?"

let option: any /* add type annotation here */
option = true

let prices: any /* add type annotation here */
prices = [3, 5, 100, 3.5]

let titles: any /* add type annotation here */
titles = ["How to Hack NASA with HTML?", "Cat Taming Masterclass"]

let options: any /* add type annotation here */
options = [true, true, false]


// Exercise 2) Any

// Here we have a product, which type is an explicit any.
// Unforunately we have here a cat instead. It is clearly seen,
// that everything is accepted, typescript basically switched off.
// We will got a lot of runtime errors and unexpected undefineds
// here.

// TODO: Create a proper type definition based on the usage of the product,
//    correct the input data and the function usage below based on that.

const anyProduct: any = {name: 'Mr. Fluff', kind: 'British Shorthair', age: 4}
const productTitle = anyProduct.title
const priceWithTaxes = anyProduct.price * (1.25)
const upperCaseTitle = anyProduct.price.toUpperCase()

// Exercise 4) Union types

// We have a common Course type in our codebase, unfortunately
// it is not correctly typed, because some API endpoints return
// the price in a string other endpoints in number format.

// TODO: Change the Course type to conform all possible formats.
//  (Check the type errors in the usages below.)
type Course = {
    title: string,
    price: number,
}

const checkoutCourse: Course = {
    title: "What You can Learn from Your Cat?",
    price: 100.0,
}
const shoppingCartCourse: Course = {
    title: "What You can Learn from your Cat?",
    price: "100.0"
}

// Exercise 5) Types Aliases
//
// We can use type aliases with
// type keyword for any annotations.

// TODO: fill the Type Alias for the account object
//  based on the example object below.
//  Note type alias can be used for any type, not just
//  objects.
type Account = {

}

const account: Account = {
    id: 5,
    name: "Awesome Account",
    currency: "USD",
}
const getAccountName = (account: Account) => account.name
// TODO: Interesting, here we are not using the Account Type Alias,
//  however the function is correctly typed, and accepts accounts.
//  Why?
const getCurrency = (account: {name: string, currency: string}) => account.currency

//
const accountName = getAccountName(account)
const accountCurrency = getCurrency(account)

// Exercise 6) Type Assertions
//
// It is possible to tell Typescript how to
// handle some data. Typically this data is
// comes from the API.

// TODO: The fetch account method just fetch a general object,
//  In our application we trust in the API. Assert it to an
//  Account type (declared above) to be able to use it as an Account
//  in the other parts of the application.
const fetchAccount = (id: number): object => ({id: id, name: "Some Account", currency: "USD"})
const currentAccount = fetchAccount(4) /* add Type Assertion here */
const currentAccountName = currentAccount.name

// Exercies 7) Literal types
//
// This is an important exercise. If a type is a
//  concerete value like "USD" or 7, it is handled as
//  a type "constant".
//  Check here the variable types and the error messages.
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases

type USD = 'USD'
type EUR = 'EUR'
// TODO: Correct the Currency type, to accept
//  both EUR and USD. How can you define two possible
//  types for one type? (we have seen before
//  with numbers and strings).
type Currency = string
const firstCurrency: Currency = 'USD';
const secondCurrency: Currency = 'EUR'
const usd: USD = firstCurrency;
const eur: EUR = secondCurrency;

// TODO: When corrected the Currency type, another issue come up
//  later in the code.
//  Check the inferred type of the someAccount variable.
//  It is inferred to string, but in the gerSomeCurrency
//  function we using our Currency type. How add some Type
//  assertion to the someAccount object to correct the later
//  usage of the someAccount variable.
//
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
const someAccount = {
    name: "My Awesome Account",
    currency: "USD"
}

const getSomeCurrency = (account: {currency: Currency}) => account.currency
const someCurrency = getSomeCurrency(someAccount)

// Exercise 8) null and undefined
//
// Null and undefined are interchangeable
// in Javascript. In typescript it depends on
// the strictNullChecks compiler options.
// In this editor, and in our production code
// it is switched on. Check how does it works.
//
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined

// TODO correct AccountWithOrWithoutCurrency or
//  the removeCurrency function body to get rid off
//  the type errors.
type AccountWithOrWithoutCurrency = {
    name: string,
    currency: 'USD' | 'EUR' | undefined
}
const removeCurrency = (account: AccountWithOrWithoutCurrency): AccountWithOrWithoutCurrency => {
    return {
        ...account,
        currency: null
    }
}

// Exercise 9) Narrowing, In

type DomainAccount = {
    name: string,
    domain: string
}
type PathAccount = {
    name: string,
    path: string
}

const accounts: Array<DomainAccount | PathAccount> = [
    {
        name: 'My Awesome Account',
        domain: 'my.awesome.info'
    },
    {
        name: 'Other Great Account',
        path: '/great'
    }
]

// TODO: Make it possible to handle the getUrl for both the DomainAccount and
//  Path account types.
const getUrl = (account: DomainAccount | PathAccount, subPath: string): string => {
    if (/* add type guard here */) {
        return `${account.path}/${subPath}`
    } else {
        return `${account.domain}/${subPath}`
    }
}

// Exercise 10)
// Narrowing, typeof

interface Listing {
    title: string,
    price: string | number,
    quantity: number,
}

// TODO: make it possible to handle both the string and number
//  type of price.
const getListingTotal = (listing: Listing): number => {
    if (/* add type guard here */) {
        return listing.price * listing.quantity
    } else {
        return parseFloat(listing.price) * listing.quantity
    }
}

// Exercise 11) Functions
//Complete the type Product according to what you have in "products".
type Product = {/*your code*/}



const products: Product[] = [
  {
    id: 4,
    title: "How to Hack NASA with HTML",
    price: "5000.00",
    createdAt: Date.parse("2022-05-18T14:48:00"),
    currency: "HUF",
    type: "Course",
    relatedCourses: [],
  },

  {
    id: 6,
    title: "Cat Grooming Masterclass",
    price: "10.00",
    createdAt: Date.parse("2022-05-19T16:00:00"),
    currency: "USD",
    type: "Program",
    relatedCourses: [
      {
        id: 11,
        title: "Lying Yourself, that you are the Master",
        price: "0.00",
        createdAt: Date.parse("2022-05-18T16:00:00"),
        currency: "USD",
        type: "Course",
        relatedCourses: [],
      },
      {
        id: 16,
        title: "Taming your cat, a life long learning",
        price: "0.00",
        createdAt: Date.parse("2022-05-17T16:00:00"),
        currency: "USD",
        type: "Course",
        relatedCourses: [],
      },
    ],
  },
]

// Add type annotations to the arguements and return types
// of these two functions.

function filterCourses(products /* add type annotation here */) /* add type annotation here */ {
  return products.filter(product => product.type === 'Course')
}

function getTitles(products /* add type annotation here */) /* add type annotation here */ {
 return products.map(product => product.title)
}


// When Typescript infers correctly the types and when it is necessary
// to define them explicitly? Try to remove type annotations from the
// filterCourses and getTitles functions
// above. Hover the mouse to the variables to check the inferred types.
// When do you see "any", and when something else?

// This two functions just here to check the proper return type in the tests.
const courses = filterCourses(products)
const titles = getTitles(products)
