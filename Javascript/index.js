const redux=require('redux')
const createStore = redux.createStore

const CAKE_ORDERED='cake_buy'
const ICE_CREAM_ORDER='choclate_buy'

function buyCake(qty = 1) {
    return {
      type: CAKE_ORDERED,
      info: "Buy cake"
    }
  }
  function buyIceCream(qty=1){
    return{
      type: ICE_CREAM_ORDER,
      info:"Buy IceCream"
    }
  }

  const initialCakeState = {
    numOfCakes: 10,
    numOfIceCream:20,
  }

  const reducer = (state = initialCakeState, action) => {
    switch (action.type) {
      case CAKE_ORDERED:
        return {
          ...state,
          numOfCakes: state.numOfCakes - 1
        }
        case ICE_CREAM_ORDER:
            return{
                numOfCakes: state.numOfIceCream - 1
            }
      default:
        return state
    }
  }
  
const store = createStore(reducer)
console.log('Initial State ', store.getState())
const unsubscribe = store.subscribe(() => {
  console.log('Updated State ', store.getState())
})


store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()




