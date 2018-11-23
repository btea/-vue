<template>
    <div id="map" style="width:800px;height:600px;margin:0 auto;"></div>
</template>


<script>
import echarts from 'echarts';
import geoJSON from './data-1540713015397-Gt6McqKps';
export default {
    data: () => {
        return {
            chart: null,
            option: null
        }
    },
    mounted: function(){
        console.log(this);
        this.getOption();
        this.renderMap('map',this.option);
    },
    methods: {
        renderMap: function(id, op){
            this.chart= echarts.init(document.getElementById(id));
            this.chart.setOption(op);
        },
        getOption:function() {
            echarts.registerMap('HUBEI', geoJSON);
            this.option = {
                backgroundColor: '#012D63',
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}\n{c} (p / km2)'
                },
                textStyle: {
                    fontFamily: 'monospace',
                    fontSize: 'bold'
                },
                geo: {
                    map: 'HUBEI',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    selectedMode: 'single',
                    label: {
                        normal: {
                            show: false,
                            color: '#4abcee'
                        },
                        emphasis: {
                            show: false,
                            color: '#fff'
                        }
                    },
                    itemStyle: {
                        normal: {
                            areaColor: 'rgba(0, 0, 0, 0)',
                            borderColor: '#8dd4f2',
                            borderWidth: '2',
                            opacity: 1
                        },
                        emphasis: {
                            areaColor: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: '#19406b'
                                }, {
                                    offset: 1,
                                    color: '#3773bb'
                                }],
                                globalCoord: false
                            },
                            opacity: 1
                        }
                    }
                },
                visualMap: {
                    show: false,
                    inRange: {
                        color: ['rgba(0, 0, 0, 0)']
                    }
                },
                series: [{
                    name: '湖北省',
                    type: 'scatter',
                    symbolSize: 0.1,
                    label: {
                        normal: {
                            show: true,
                            color: '#4abcee',
                            formatter: (param) => {
                                return '{a|' + param.name + '}\n{b|' + (param.value[2] || '') + '}'
                            },
                            rich: {
                                a: {
                                    fontFamily: 'Zapfino',
                                    fontSize: '70%',
                                    fontWeight: 'normal',
                                    fontStretch: 'normal',
                                    letterSpacing: '1px',
                                    color: '#8dd4f2',
                                    opacity: 0.8,
                                    align: 'center'
                                },
                                b: {
                                    fontFamily: 'Zapfino',
                                    fontSize: '80%',
                                    fontWeight: 'normal',
                                    fontStretch: 'normal',
                                    letterSpacing: '2px',
                                    color: '#deff00',
                                    align: 'center'
                                }
                            }
                        },
                        emphasis: {
                            show: true,
                            color: '#fff',
                            formatter: (param) => {
                                return '{a|' + param.name + '}\n{b|' + (param.value[2] || '') + '}'
                            },
                            rich: {
                                a: {
                                    fontFamily: 'MicrosoftYaHei-Bold',
                                    fontSize: '12px',
                                    fontWeight: 'normal',
                                    fontStretch: 'normal',
                                    letterSpacing: '1px',
                                    color: '#8dd4f2',
                                    opacity: 0.8,
                                    align: 'center'
                                },
                                b: {
                                    fontFamily: 'DS-Digital-Bold',
                                    fontSize: '16px',
                                    fontWeight: 'normal',
                                    fontStretch: 'normal',
                                    letterSpacing: '2px',
                                    color: '#deff00',
                                    align: 'center'
                                }
                            }
                        }
                    },
                    coordinateSystem: 'geo',
                    data: (()=>{
                        return geoJSON.features.map(e => {
                            let name = e.properties.name
                            return {
                                name: name,
                                value: e.properties.cp.concat(Math.floor(Math.random()*1000))
                            }
                        })
                    })()
                }]
            }
        }
    }
}
</script>

<style lang="less" scoped>
    // #app{
    //     width: 800px;
    //     height: 600px;
    //     margin: 10px auto;
    // }
</style>


