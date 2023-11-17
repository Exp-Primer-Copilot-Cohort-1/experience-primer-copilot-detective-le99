function skillsMember() {
    let member = document.getElementById('member');
    let memberSkills = document.getElementById('memberSkills');

    if (member.checked === true) {
        memberSkills.style.display = 'block';
    } else {
        memberSkills.style.display = 'none';
    }
}