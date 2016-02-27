exports.kpi = {
    getDoughnutData: function (actual, greenTarget, yellowTarget) {     
        if (actual < yellowTarget) {
            return [
                {
                    value: 100 - greenTarget,
                    color: "green",
                    highlight: "green",
                    label: ""
                },
                {
                    value: (100 - yellowTarget) - (100 - greenTarget),
                    color: "orange",
                    highlight: "orange",
                    label: ""
                },
                {
                    value: yellowTarget - actual,
                    color: "grey",
                    highlight: "grey",
                    label: ""
                },
                {
                    value: actual,
                    color: "darkred",
                    highlight: "darkred",
                    label: ""
                }
            ];
        }
        if (actual > greenTarget) {
            return [
                {
                    value: 100 - actual,
                    color: "grey",
                    highlight: "grey",
                    label: ""
                },
                {
                    value: actual,
                    color: "green",
                    highlight: "green",
                    label: ""
                }
            ] 
        }
        return [
            {
                value: 100 - greenTarget,
                color: "green",
                highlight: "green",
                label: ""
            },
            {
                value: greenTarget - actual,
                color: "grey",
                highlight: "grey",
                label: ""
            },
            {
                value: actual,
                color: "orange",
                highlight: "orange",
                label: ""
            }
        ]
    }
}