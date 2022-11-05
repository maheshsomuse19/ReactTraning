const redux = require('redux')

const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers

const CAKE_ORDERED = 'CAKE_BUY'
const icecream_order = 'Ice_cream_order'

function buyCake(qty = 1) {
  return {
    type: CAKE_ORDERED,
    info: "Buy cake"
  }
}
function buyice_cream(qty=1){
  return{
    type:'Ice_cream_order',
    info:"Buy IceCream"
  }
}

const initialCakeState = {
  numOfCakes: 10,
  
}
const initialIce_creamState={
  numOfIce_cream:20,

}

const cakereducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      }
    default:
      return state
  }
}

const ice_creamreducer = (state = initialIce_creamState, action) => {
  switch (action.type) {
    case icecream_order:
      return {
        ...state,
        numOfIce_cream: state.numOfIce_cream - 1
      }
    default:
      return state
  }
}
const rootReducer = combineReducers({
  cake:cakereducer,
  iceCream: ice_creamreducer
})
const store = createStore(rootReducer)
console.log('Initial State ', store.getState())
const unsubscribe = store.subscribe(() => {
  console.log('Updated State ', store.getState())
})

// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
const actions = bindActionCreators(
  { buyCake, buyice_cream },
  store.dispatch
)
actions.buyCake()
actions.buyCake()
actions.buyCake()
actions.buyice_cream()
actions.buyice_cream()

unsubscribe()
