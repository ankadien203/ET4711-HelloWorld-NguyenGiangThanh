
const changeButton = document.getElementById("changeButton");

const personalInfo = {
    name: "Nguyễn Giang Thành",
    id: "2022xxxx",
    address: "Phú Thọ",
    dob: "01/01/2004"
};

const sampleInfo = {
    name: "Nguyễn Văn A",
    id: "20230001",
    address: "Hà Nội",
    dob: "15/05/2005"
};

let showingPersonalInfo = true;

changeButton.addEventListener("click", function () {
    const info = showingPersonalInfo ? sampleInfo : personalInfo;

    document.getElementById("studentName").textContent = info.name;
    document.getElementById("studentId").textContent = info.id;
    document.getElementById("studentAddress").textContent = info.address;
    document.getElementById("studentDob").textContent = info.dob;

    showingPersonalInfo = !showingPersonalInfo;
    changeButton.textContent = showingPersonalInfo
        ? "Hiển thị dữ liệu mẫu"
        : "Hiển thị thông tin của tôi";
});
