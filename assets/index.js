function gotoInformation(){
    window.location.href = "../information";
}

function gotoEmployees(){
    window.location.href = "../employees";
}

function gotoContact(){
    window.location.href = "../contact";
}

function gotoMain(){
    window.location.href = "../"
}

function gotoInformationFromMain(){
    window.location.href = "information";
}

function gotoEmployeesFromMain(){
    window.location.href = "employees";
}

function gotoContactFromMain(){
    window.location.href = "contact";
}

function gotoMaintenanceFromMain(active){
    if (!active) return;
    window.location.href = "maintenance"
}

function gotoMaintenance(active){
    if (!active) return;
    window.location.href = "../maintenance"
}