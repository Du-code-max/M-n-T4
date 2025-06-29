// Khởi tạo biểu đồ học tập
document.addEventListener('DOMContentLoaded', function() {
    // Biểu đồ loginChart (tiến độ học tập theo 4 tuần tháng 7/2025)
    const loginCtx = document.getElementById('loginChart');
    if (loginCtx) {
        const weeks = ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4'];
        const progress = [25, 50, 75, 100];
        const ctx = loginCtx.getContext('2d');
        
        // Tạo gradient màu cho vùng dưới đường
        const gradient = ctx.createLinearGradient(0, 0, 0, 180);
        gradient.addColorStop(0, 'rgba(40, 199, 111, 0.25)'); // Xanh lá nhạt
        gradient.addColorStop(0.5, 'rgba(255, 193, 7, 0.18)'); // Vàng nhạt
        gradient.addColorStop(1, 'rgba(255, 87, 34, 0.15)'); // Cam nhạt
        
        // Đổi màu điểm theo giá trị
        const pointColors = progress.map(val => {
            if (val >= 80) return '#28c76f'; // Xanh lá
            if (val >= 60) return '#ffc107'; // Vàng
            return '#ff5722'; // Cam
        });
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: weeks,
                datasets: [{
                    label: 'Tiến độ học tập',
                    data: progress,
                    fill: true,
                    backgroundColor: gradient,
                    borderColor: '#4e73df',
                    borderWidth: 2,
                    pointBackgroundColor: pointColors,
                    pointBorderColor: '#fff',
                    pointRadius: 7,
                    pointHoverRadius: 10,
                    tension: 0.4
                }]
            },
            options: {
                plugins: { legend: { display: false } },
                layout: { padding: { right: 40, left: 10, top: 10, bottom: 10 } },
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: { color: '#fff', font: {weight: 'bold'} }
                    },
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: { color: 'rgba(255,255,255,0.1)' },
                        ticks: {
                            color: '#fff',
                            callback: function(value) { return value + '%'; }
                        }
                    }
                },
                responsive: false,
            }
        });
    }

    const ctx = document.getElementById('progressChart').getContext('2d');
    
    // Dữ liệu giả lập
    const data = {
        labels: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4', 'Tuần 5', 'Tuần 6'],
        datasets: [{
            label: 'Hoàn thành bài tập (%)',
            data: [30, 45, 60, 70, 85, 95],
            backgroundColor: 'rgba(78, 115, 223, 0.2)',
            borderColor: 'rgba(78, 115, 223, 1)',
            borderWidth: 2,
            tension: 0.3,
            fill: true
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Hoàn thành: ${context.parsed.y}%`;
                        }
                    }
                }
            }
        }
    };

    new Chart(ctx, config);

    // Xử lý nộp bài tập
    const submitButtons = document.querySelectorAll('.btn-submit');
    submitButtons.forEach(button => {
        button.addEventListener('click', function() {
            const assignment = this.closest('li').querySelector('h4').textContent;
            alert(`Bạn đang nộp bài tập: ${assignment}`);
        });
    });

    // Xử lý bắt đầu bài kiểm tra
    const startButtons = document.querySelectorAll('.btn-start');
    startButtons.forEach(button => {
        button.addEventListener('click', function() {
            const quiz = this.closest('li').querySelector('h4').textContent;
            alert(`Bắt đầu bài kiểm tra: ${quiz}`);
        });
    });

    // Hiệu ứng thông báo
    const notificationBtn = document.querySelector('.notification-btn');
    notificationBtn.addEventListener('click', function() {
        this.querySelector('.badge').textContent = '0';
        this.querySelector('.badge').style.backgroundColor = '#858796';
    });

    // Vẽ biểu đồ mini tiến độ học tập (4 tuần)
    var ctxMini = document.getElementById('miniProgressChart');
    if (ctxMini) {
        ctxMini.width = 520;
        ctxMini.height = 300;
        new Chart(ctxMini, {
            type: 'line',
            data: {
                labels: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4'],
                datasets: [{
                    label: 'Tiến độ',
                    data: [25, 50, 70, 90],
                    borderColor: '#fff',
                    borderWidth: 4,
                    backgroundColor: 'rgba(255,255,255,0.10)',
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#4e73df',
                    pointRadius: 8,
                    pointHoverRadius: 10,
                    fill: true,
                    tension: 0.3,
                }]
            },
            options: {
                responsive: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        enabled: true,
                        callbacks: {
                            label: function(context) {
                                return context.parsed.y + '%';
                            }
                        }
                    },
                    title: {
                        display: false
                    }
                },
                layout: {
                    padding: {
                        left: 40,
                        right: 30,
                        top: 30,
                        bottom: 40
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: true,
                            color: 'rgba(255,255,255,0.4)',
                            drawBorder: false,
                            lineWidth: 1.5
                        },
                        ticks: {
                            font: { size: 20, family: 'Segoe UI, Arial, sans-serif', weight: 'bold' },
                            color: '#fff',
                            padding: 8
                        }
                    },
                    y: {
                        beginAtZero: true,
                        min: 0,
                        max: 100,
                        grid: {
                            display: true,
                            color: 'rgba(255,255,255,0.4)',
                            drawBorder: false,
                            lineWidth: 1.5
                        },
                        ticks: {
                            stepSize: 20,
                            maxTicksLimit: 6,
                            min: 0,
                            max: 100,
                            callback: function(value) { return value + '%'; },
                            font: { size: 20, family: 'Segoe UI, Arial, sans-serif', weight: 'bold' },
                            color: '#fff',
                            padding: 8
                        }
                    }
                }
            }
        });
    }

    // Sinh chuỗi streak (chuỗi 7 ngày học và icon sách đang cháy)
    const streakRow = document.getElementById('streak-row');
    if (streakRow) {
        const days = 7;
        const streakText = document.createElement('span');
        streakText.className = 'streak-days';
        streakText.textContent = 'Chuỗi 7 ngày học:';
        const icons = document.createElement('span');
        icons.className = 'streak-icons';
        for (let i = 0; i < days; i++) {
            const bookFire = document.createElement('span');
            bookFire.className = 'book-fire';
            bookFire.innerHTML = '<i class="fas fa-book"></i><i class="fas fa-fire"></i>';
            icons.appendChild(bookFire);
        }
        streakRow.className = 'streak-row';
        streakRow.appendChild(streakText);
        streakRow.appendChild(icons);
    }

    // Đánh dấu đã đọc thông báo khi hover vào từng tin trong dropdown
    const notificationBadge = document.querySelector('.notification-btn .badge');
    const notificationItems = document.querySelectorAll('.notification-dropdown li');
    let unreadCount = notificationItems.length;
    notificationBadge.textContent = unreadCount;
    notificationItems.forEach(item => {
        let marked = false;
        item.addEventListener('mouseenter', function() {
            if (!marked && unreadCount > 0) {
                unreadCount--;
                notificationBadge.textContent = unreadCount;
                marked = true;
                if (unreadCount === 0) {
                    notificationBadge.style.display = 'none';
                }
            }
        });
    });
});