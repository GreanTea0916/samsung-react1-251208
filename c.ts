const a: number = 123


const date: Date = new Date()

const res: Promise<{ data: boolean }> = axios.get('https://api.example.com')
console.log(res.data) // true

function get() {
  return new Promise(resolve => resolve(true))
}
const promise: Promise<boolean> = get()
const result = await promise


