import {rest} from 'msw';
//handlers is an array. you can mock as any request as you want here
export const handlers = [
  //rest.[type of the request(get, put, delete)]([api path], (req, res, ctx)=>{})
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx)=>{
    //respond with mock data
    return res(ctx.status(200),
    ctx.json([
      {name: "Princess Diana"},
      {name: "william shakespeare"},
      {name: "Michael Jacksom"},
      {name: "Mike Jacksom"},
      {name: "Sara Jacksom"}

    ]))
  }),
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json([{
    title: 'title a',
    body: 'body a'
  }])
  )
})

]
