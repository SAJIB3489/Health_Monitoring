function checkHealth() {
    showLoading();
    var websiteUrl = 'http://192.168.84.17/'; // Placeholder URL

    var websiteFrame = document.getElementById('websiteFrame');
    websiteFrame.style.display = 'block';
    websiteFrame.src = websiteUrl;

    hideLoading();
}

function browseWebsite() {
    var websiteUrl = 'http://192.168.84.17/';

    // Check if the user is using an Android device
    var isAndroid = /Android/i.test(navigator.userAgent);

    // Append a user-agent parameter to request the mobile version
    if (isAndroid) {
        websiteUrl += '?mobile=true';
    }

    var websiteFrame = document.getElementById('websiteFrame');
    websiteFrame.style.display = 'block';
    websiteFrame.src = websiteUrl;

    hideLoading();
}

function showLoading() {
    document.getElementById('loading').style.display = 'block';
}

function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

function displayHealthData(data) {
    document.getElementById('healthData').innerText = data;
}
