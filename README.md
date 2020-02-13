# Ship menu demo

### [demo url](https://nicehorse06.github.io/react_redux_ship_demo/dist/index.html)

### 開發
* webpack server執行於記憶體：
	* npm run dev
### 佈署
* webpack 打包於dist中，佈署於正式環境
	* npm run build

## todo 
* 呼叫HTTP
* 用 store.dispatch()更新資料 
	*    ` store.dispatch(addShipList({ "name": "Jimmy", "logo": "https: //static.oopocket.com/store/iconTreemall@3x.png", "status": { "code": 3, "type": "已取消" }, "date": "107/6/12" }))`