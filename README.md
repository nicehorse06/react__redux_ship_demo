# Ship menu demo

[demo url](https://nicehorse06.github.io/react-redux-todo-list-demo/dist/)

## todo 
* 呼叫HTTP
* 用 store.dispatch()更新資料 
	*    ` store.dispatch(addShipList({ "name": "Jimmy", "logo": "https: //static.oopocket.com/store/iconTreemall@3x.png", "status": { "code": 3, "type": "已取消" }, "date": "107/6/12" }))`


## Redux筆記
### state:
* redux的state為全域使用
* 使用時都是一個state tree，即為擁有所有state狀態的物件
### Action: 
* 純JS，為一個物件，由一個type和任意key組成，如以下
	* { type: 'FETCH_USER_SUCCESS', response: { id: 3, name: 'Mary' } }
	* { type: 'ADD_TODO', text: 'Read the Redux docs.' }
* 是store的唯一資訊來源，用store.dispatch()傳遞
* Action creator，一個回傳Action的function，這樣做方便測試
### Reducer
* 純JS，為pure function，用來計算下一個state
* 保管state，依據給定action回傳對應state
* 在設計state物件形狀時，盡量讓UI和資料分離
* Reducer唯一pure function依據之前的state和一個action回傳下一個state
	* 如`(previousState, action) => newState`
* 因為會用到Array.reduce所以稱為Reducer
* 預設回傳先前的state，如果有對應到回傳新的state，不要對舊的做改變
### store
* 為Redux提供的方法
* 藉由createStore(Reducer)得到新store
	* 每個專案只有一個store，帶入主要的Reducer
* 藉由getState()來獲取state
* 藉由dispatch(action)來更新state
### Redux資料生命週期
* 呼叫 store.dispatch(action)
* Redux store 呼叫你給它的 reducer function
	* store會回傳兩個參數到reducer，現在的 state tree 和 aciton
* root reducer 可以把多個 reducer 的 output 合併成一個單一的 state tree。
	* 當帶入參數到 combineReducers() 的結果時會所有Reducer都帶入該action
	* 再將個別Reducer回傳的state合併成一state tree
* Redux store 儲存 root reducer 回傳的完整 state tree。
	* 新的state tree即為此程式新的state
	* 每個store.subscribe(listener) 註冊的 listener 現在將會被呼叫
	* listeners 可以呼叫 store.getState() 來取得現在的 state
* 以上，UI即可因為store.dispatch(action)來反映新的state
### React + Redux 分離 presentational 和 container component
* Presentational Components
	* 怎麼看事情（markup, styles)，如UI顯示
	* 沒有redux邏輯
	* 從props讀資料
	* 描述了樣貌卻不知道資料從哪裡來，或是要如何改變它
	* 只顯示 render 給它們的東西
	* 如果不用Redux此部分的component可完全保留
* Container Components
	* 怎麼做事情 (抓資料, 更新state)
	* 有redux邏輯
	* 取得和改寫資料皆用redux邏輯
	* 用來連結 presentational component 至 Redux
		* 技術上是用store.subscribe()讀取state tree，提供props讓UI render
		* 建議用connect()來產生Container Components增進效能優化
	* 使用connect()需定義特別的function: `mapStateToProps`
		* 描述如何把Redux store state轉成presentational component 的 props
	* 使用connect()需定義特別的function: `mapDispatchToProps`
		* 把 dispatch(action)注入 到presentational component 中當作 callback props
	* 最後用 container 回傳 `connect(mapStateToProps, mapDispatchToProps)(presentational)`
* 傳遞 Store 	
	* 技術上需把Store當作props傳給每一個container
	* 推薦使用  <Provider> 讓所有container可取得store
	* 只需在 render 的 root component 中使用一次即可

## 參考資料
* [Redux 中文文件](https://chentsulin.github.io/redux/index.html) 重要重要
* [React 與他的快樂小夥伴 Redux -基礎教學](https://medium.com/enjoy-life-enjoy-coding/react-%E5%8F%8A-redux-%E9%96%93%E7%9A%84%E6%97%A5%E5%B8%B8-1-%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8-215436d14430)
* [一步一腳印的React旅程](https://ithelp.ithome.com.tw/users/20106935/ironman/1651) 不錯的教學，從webpack安裝開始
* [使用 React、Redux 和 React-Bootstrap 實作 Todo List。](https://cythilya.github.io/2017/04/01/todo-list-react-and-redux-example/)