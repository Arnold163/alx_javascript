//closure and loops 

function createClassRoom(numberOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat;
        };
    }
    var student = [];
    for (var i = 0; i < numberOfStudents; i++) {
        var seatNumber = studentSeat(i + 1);
        student.push(seatNumber);
    }
    return student;
}

var classRoom = createClassRoom(10);
console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());