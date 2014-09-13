angular
  .module('calculate', [ 
    'googlechart'
   ])
  .controller("GetValues",['$scope', function($scope){
          $scope.months = [];
          $scope.entry = {
            amount: ''  
          };
          
          $scope.submit = function(){
              var vals = $scope.entry, i;
              $scope.months =[];
              $("#emiTable").show("slow");
              for(i = 0; i < vals.tenure; i++){
                  var m = i+1;
                  emicalc = calcumateemi(vals.tenure, vals.amount, vals.interest, i);
                  interestTotal = emicalc * vals.tenure;
                  $scope.months.push({
                      sno : m,
                      emi : emicalc, // emicalc,
                      balance: Math.floor(interestTotal - (emicalc*m))
                  });
              }
              var inter = (calcumateemi($scope.entry.tenure, $scope.entry.amount, $scope.entry.interest, i) * $scope.entry.tenure) - $scope.entry.amount;
              $scope.chart ={
                "type": "PieChart",
                "displayed": true,
                "data": {
                  "cols": [
                    {
                      "id": "interest",
                      "label": "Total EMI",
                      "type": "string",
                      "p": {}
                    },
                    {
                      "id": "principle",
                      "label": "Principle",
                      "type": "number",
                      "p": {}
                    },
                    {
                      "id": "interest",
                      "label": "Interest",
                      "type": "number",
                      "p": {}
                    }                    
                  ],
                  "rows": [
                    {
                      "c": [
                        {
                          "v": "Principle"
                        },
                        {
                          "v": parseInt($scope.entry.amount)
                        }
                      ]
                    },
                    {
                      "c": [
                        {
                          "v": "Total Interest"
                        },
                        {
                          "v": parseInt(inter)
                        }
                      ]
                    }
                  ]
                },
                "options": {
                    pieSliceText: 'label',
                  "title": "EMI PIE Chart",
                  "displayExactValues": true,
                  chartArea:{left:0,top:50,width:'100%',height:'100%'}
                }
              }
          };
  }]);