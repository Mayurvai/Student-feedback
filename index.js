
        function populate(s1,s2) {
            var s1 =document.getElementById(s1);
            var s2 =document.getElementById(s2);
            s2.innerHTML="";
            if(s1.value=="bca"){
                var optionArray=['select|Select','computer fundamental|CF','oa|OA','dms|DMS','sm|SM','eng|ENG','os|OS','cp|CP','wy-I|WT-I', 'or|OR', 'de-i|DE-I', 'vb6.0|VB 6.0', 'ds|DS', 'dbms|DBMS', 'cc|CC', 'dcn|DCN', 'se-ii|SE-II','php|PHP','cg|CG','vb.net|VB.Net', ];
            }
            else if(s1.value == "bba"){
                 var optionArray=['select|Select','me|ME','eng|Eng','eb|EB','tally|Tally','ad|AD']

            }else if(s1.value == "bcca"){
                 var optionArray=['select|Select','cf|CF','eng|Eng','ms-office|MS-Office','tally|Tally','ve|VE','css&javascript|Css & JavaScrit','evs|EVS','bs|BS','cn|CN']

            }
            else if(s1.value == "mca"){
                 var optionArray=['select|Select','java|JAVA','php|PHP','dcn|DCN','adbms|ADBMS','java|JAVA','dm|DM','mc|MC','pp|PP','bd|BD','sc|SC']

            }
            else if(s1.value == "mba"){
                 var optionArray=['select|Select','cf|CF','eng|Eng','ms-office|MS-Office','tally|Tally','ve|VE','css&javascript|Css & JavaScrit','evs|EVS','bs|BS','cn|CN']

            }
            for(var option in optionArray){
                var pair = optionArray[option].split("|");
                var newoption = document.createElement("option");

                newoption.value = pair[0];
                newoption.innerHTML=pair[1];
                s2.options.add(newoption)
            }
        }
    