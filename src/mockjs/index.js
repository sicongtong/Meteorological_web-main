import Mock from 'mockjs';


export const get_data_mainview_skyimg = () => {
    Mock.mock('/api/data_mainview_skyimg','get',{
        "data":{
            captureTime: "@DATETIME('yyyy-MM-dd HH:mm:ss')",
            sunAltitude: "@FLOAT(0, 90, 1, 2)",
            sunAzimuth: "@FLOAT(0, 360, 1, 2)",
            illuminance: "@INTEGER(0, 20000)",
            irradiance: "@INTEGER(0, 50000)",
            imgfilename: "../../prototype/skyimg_clip.png"
            
        },
        "code": 200,
        "message": "success"
    });
}

export const get_data_mainview_forecast = () => {
    Mock.mock('/api/data_mainview_forecast','get',{
        "data":{
            mae: "@FLOAT(0, 100, 1, 2)",
            mape: "@FLOAT(0, 100, 1, 2)",
            nrmse: "@FLOAT(0, 100, 1, 2)",
            r2: "@FLOAT(0, 100, 1, 2)",
        },
        "code": 200,
        "message": "success"
    });
}

export const get_data_mainview_tstmp = () => {
    Mock.mock('/api/data_mainview_tstmp','get',{
        "data":{
            temperature: "@FLOAT(-10, 40, 1, 2)",
            pressure: "@FLOAT(900, 1100, 1, 2)",
            humidity: "@FLOAT(0, 100, 1, 2)",
            DNI: "@FLOAT(0, 1000, 1, 2)",
            GHI: "@FLOAT(0, 1000, 1, 2)",
            wind: "@FLOAT(0, 20, 1, 2)",
        },
        "code": 200,
        "message": "success"
    });
}

export const get_data_mainview_skyimg_chart = () => {
    let luxData = new Array(10)
    .fill(undefined)
    .map(() => Math.random() * 330000);
    let cloudData = new Array(10)
    .fill(undefined)
    .map(() => Math.random() * 10);
    Mock.mock('/api/data_mainview_skyimg_chart','get',{
        "data":{
            luxData: luxData,
            cloudData: cloudData
        },
        "code": 200,
        "message": "success"
    });
}

export let get_data_sataview_boxplot = () => {
    let boxData = [];
    let lineData = [];
  
    for (let i = 0; i < 12; i++) {
      let numbers =  Array.from({ length: 5 }, () => Math.random() * 800);
      numbers.sort((a, b) => a - b);
  
      boxData.push([numbers[3], numbers[1], numbers[0], numbers[4]]);
      lineData.push(numbers[2]);
    }
  
    Mock.mock('/api/data_sataview_boxplot', 'get', {
      "data": {
        boxData: boxData,
        lineData: lineData
      },
      "code": 200,
      "message": "success"
    });
  }

export let get_data_sataview_piechart = () => {
    let piedata=[];

    for (let i = 0; i < 12; i++) {
        piedata.push(Math.random() * 100);
    }
    Mock.mock('/api/data_sateview_piechart', 'get', {
        "data": {
            piedata: piedata
        },
        "code": 200,
        "message": "success"
    });
}

export let get_data_sataview_heatmap = () => {
    let heatdata = [];
    for (let i = 0; i < 12; i++) {
        
        for (let j = 0; j < 12; j++) {
            let row = [];
            row.push(i);
            row.push(j);
            row.push(parseFloat((Math.random() * 100).toFixed(0)));
            heatdata.push(row);
        }
        
    }
    Mock.mock('/api/data_sataview_heatmap', 'get', {
        "data": {
            heatdata: heatdata
        },
        "code": 200,
        "message": "success"
    });
}