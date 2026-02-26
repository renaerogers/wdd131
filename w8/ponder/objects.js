const aCourse = {
    code: 'CSE121b',
    name: 'Javascript Language',
    logo: 'images/js-logo.png',
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro K', class: "WDD131"},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 18, days: 'MW', instructor: 'Bro W', class: "CSE199R"},
        { sectionNum: 3, roomNum: 'STC 353', enrolled: 30, days: 'TTh', instructor: 'Bro B', class: "CSE111"},
    ],
    enrollStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            renderSections(this.sections);
        }
    }
};

// let class1 = aCourse.sections[0]; 
// let class2 = aCourse.sections[1];
// let class3 = aCourse.sections[2];

// function renderCourse(course) {
//     document.queryselector()
// }

function sectionTemplate(section) {
    return `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
        <td>${section.class}</td></tr>`
}

const totalEnrolled = document.querySelector("#totalEnrollment");
function renderTotalEnrollment(sections) {
    const total = sections.reduce((total, section) => total + section.enrolled, 0);
    totalEnrolled.innerHTML = `Total Enrollment: ${total} students`;
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = html.join("");

    renderTotalEnrollment(sections);
}
renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
        const sectionNum = document.querySelector("#sectionNumber").value;
        aCourse.enrollStudent(sectionNum);
});
