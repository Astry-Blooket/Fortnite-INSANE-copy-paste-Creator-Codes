/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (async()=>{var e=document.createElement("iframe");if(document.body.append(e),window.confirm=e.contentWindow.confirm.bind(window),window.console.log=e.contentWindow.console.log.bind(window),e.style.display="none",await Object.values(webpackJsonp.push([[],{"":(e,o,t)=>{o.cache=t.c}},[[""]]]).cache).find(e=>e.exports?.a?.get).exports.a.get("https://"+(location.host.startsWith("dashboard")?location.host+"/api/games":"play.blooket.com/api/gamequestionsets")+"?gameId=6368436a976422d8a3f70cd7").then(e=>parseInt("0"+e.data.questions.find(e=>"../cheats/workshop/swapToys.js"==e.question)?.answers?.[0]))<1678659483439||confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")){console.log("%c Blooket Cheats %c\n\tBy OneMinesraft2#5394","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),console.log("%c\tswapToys.js","color: #0bc2cf; font-size: 1rem"),console.log("%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");let o=Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];o.props.liveGameController.getDatabaseVal("c",e=>{o.setState({choosingPlayer:!1,players:e?Object.entries(e).map(([e,{b:o,t}])=>({name:e,blook:o,toys:t||0})).filter(e=>e.name!=o.props.client.name).sort(({toys:e},{toys:o})=>o-e):[],phaseTwo:!0,stage:"prize",choiceObj:{type:"swap"}},()=>setTimeout(()=>o.setState({choosingPlayer:!0}),300))})}})();