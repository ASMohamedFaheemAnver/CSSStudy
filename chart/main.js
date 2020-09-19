// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

var leadsRef = database.ref("data");

leadsRef.on("value", function (snapshot) {
  var rows = [];

  snapshot.forEach(function (childSnapshot) {
    var childData = childSnapshot.val();
    var time = childSnapshot.key;
    var fourPoints = childData.split(" ").map((point) => {
      return parseInt(point.slice(3));
    });
    fourPoints.unshift(time);

    rows.push(fourPoints);
    drawTheGraph(rows);
  });
});

let drawTheGraph = (rows) => {
  google.charts.load("current", { packages: ["corechart", "line"] });
  google.charts.setOnLoadCallback(drawCrosshairs);

  function drawCrosshairs() {
    var data = new google.visualization.DataTable();
    data.addColumn("string", "X");
    data.addColumn("number", "GX");
    data.addColumn("number", "GY");
    data.addColumn("number", "GZ");

    data.addRows(rows);
    console.log(rows);

    var options = {
      hAxis: {
        title: "Time",
      },
      vAxis: {
        title: "Value",
      },
      colors: ["#a52714", "#097138", "#ffff00"],
      crosshair: {
        color: "#000",
        trigger: "selection",
      },
    };

    var chart = new google.visualization.LineChart(
      document.getElementById("chart_div")
    );

    chart.draw(data, options);
  }
};
