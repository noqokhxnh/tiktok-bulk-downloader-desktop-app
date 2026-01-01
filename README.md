# Ứng Dụng Desktop TikTok Bulk Downloader

TikTok Bulk Downloader là một ứng dụng desktop mạnh mẽ cho phép người dùng tải xuống nhiều video TikTok cùng lúc một cách dễ dàng và nhanh chóng.

## Tính năng

- **Tải hàng loạt video TikTok**: Tải xuống nhiều video TikTok cùng lúc chỉ với một cú nhấp chuột
- **Không có watermark**: Tải video không có logo TikTok, giúp video sạch sẽ và chuyên nghiệp hơn
- **Giao diện người dùng thân thiện**: Giao diện hiện đại, dễ sử dụng với thiết kế trực quan
- **Chất lượng cao**: Tải video với chất lượng gốc từ TikTok
- **Hỗ trợ đa nền tảng**: Hoạt động trên Windows, macOS và Linux
- **Cập nhật tự động**: Ứng dụng tự động cập nhật phiên bản mới nhất
- **Quản lý tải xuống**: Theo dõi tiến trình tải và quản lý các video đã tải
- **Tốc độ tải nhanh**: Tối ưu hóa để tải video nhanh chóng và hiệu quả
- **Lịch sử tải xuống**: Lưu trữ lịch sử các video đã tải để dễ dàng truy xuất lại
- **Hỗ trợ nhiều định dạng**: Tải cả video và âm thanh từ TikTok

## Cách sử dụng

### Cài đặt

#### Tải bản đã build sẵn (khuyến nghị)

1. Truy cập trang [Releases](https://github.com/minhchi1509/tiktok-bulk-downloader-desktop-app/releases) trên GitHub
2. Tải phiên bản phù hợp với hệ điều hành của bạn:
   - Windows: Tải file `.exe`
   - macOS: Tải file `.dmg`
   - Linux: Tải file `.AppImage` hoặc `.deb`
3. Chạy file cài đặt và làm theo hướng dẫn

#### Cài đặt từ mã nguồn

1. Clone repository:

```bash
git clone https://github.com/minhchi1509/tiktok-bulk-downloader-desktop-app.git
```

2. Di chuyển vào thư mục dự án:

```bash
cd tiktok-bulk-downloader-desktop-app
```

3. Cài đặt các phụ thuộc:

```bash
npm install
```

### Sử dụng cơ bản

1. **Mở ứng dụng**: Khởi động TikTok Bulk Downloader trên máy tính của bạn

2. **Dán liên kết video**:
   - Sao chép liên kết video TikTok từ ứng dụng TikTok hoặc trình duyệt web
   - Dán liên kết vào ô nhập liệu trong ứng dụng

3. **Tải xuống**:
   - Nhấp vào nút "Tải xuống" để bắt đầu quá trình tải
   - Ứng dụng sẽ xử lý và tải video về thư mục đã chọn

4. **Tải hàng loạt**:
   - Bạn có thể dán nhiều liên kết video cùng lúc, mỗi liên kết trên một dòng
   - Ứng dụng sẽ tự động tải tất cả các video trong danh sách

5. **Theo dõi tiến trình**:
   - Xem tiến độ tải xuống trong bảng hiển thị
   - Ứng dụng sẽ thông báo khi quá trình tải hoàn tất

### Sử dụng nâng cao

- **Lọc video**: Lọc video theo người dùng, hashtag hoặc từ khóa
- **Chọn chất lượng**: Chọn chất lượng video mong muốn trước khi tải
- **Thiết lập thư mục lưu**: Thiết lập thư mục lưu trữ mặc định cho các video tải về
- **Lịch sử tải**: Xem lại các video đã tải từ lịch sử tải xuống
- **Tùy chỉnh cài đặt**: Điều chỉnh tốc độ tải, số lượng tải đồng thời, và các tùy chọn khác

## Yêu cầu hệ thống

- **Windows**: Windows 7 trở lên
- **macOS**: macOS 10.12 trở lên
- **Linux**: Hỗ trợ các bản phân phối phổ biến như Ubuntu, Fedora, Debian
- **RAM**: Tối thiểu 2GB
- **Dung lượng đĩa**: Tối thiểu 100MB cho ứng dụng + không gian cho video tải về

## Phát triển

### Yêu cầu phát triển

- Node.js phiên bản 18 hoặc mới hơn
- npm hoặc yarn

### Chạy chế độ phát triển

```bash
npm run dev
```

### Build ứng dụng

#### Build cho Windows:

```bash
npm run build:win
```

#### Build cho macOS:

```bash
npm run build:mac
```

#### Build cho Linux:

```bash
npm run build:linux
```

## Công nghệ sử dụng

- **Electron**: Cho phép xây dựng ứng dụng desktop đa nền tảng
- **React**: Thư viện JavaScript cho giao diện người dùng
- **TypeScript**: Ngôn ngữ lập trình mạnh mẽ dựa trên JavaScript
- **Tailwind CSS**: Framework CSS cho thiết kế hiện đại
- **Axios**: Thư viện HTTP cho việc gọi API
- **Framer Motion**: Thư viện cho hiệu ứng chuyển động mượt mà
- **@heroui/react**: Bộ thành phần UI hiện đại
- **@tanstack/react-table**: Thư viện bảng dữ liệu mạnh mẽ

## Cấu trúc dự án

```
tiktok-bulk-downloader-desktop-app/
├── src/                    # Mã nguồn ứng dụng
├── resources/             # Tài nguyên như icon, hình ảnh
├── out/                   # Thư mục đầu ra sau khi build
├── package.json           # Thông tin dự án và phụ thuộc
├── electron.vite.config.ts # Cấu hình Electron-Vite
└── README.md              # Tài liệu hướng dẫn
```

## Đóng góp

Nếu bạn muốn đóng góp cho dự án, vui lòng làm theo các bước sau:

1. Fork dự án
2. Tạo một nhánh tính năng mới (`git checkout -b feature/AmazingFeature`)
3. Commit các thay đổi của bạn (`git commit -m 'Add some AmazingFeature'`)
4. Push lên nhánh (`git push origin feature/AmazingFeature`)
5. Tạo một Pull Request

## Giấy phép

Dự án này được cấp phép theo Giấy phép MIT - xem tệp [LICENSE](LICENSE) để biết thêm chi tiết.

## Liên hệ

Tác giả: MinhChi1509
Email: [minhchi1509@gmail.com](mailto:minhchi1509@gmail.com)
Trang chủ: [https://toptop-api.minhchi.id.vn](https://toptop-api.minhchi.id.vn)
Repository: [https://github.com/minhchi1509/tiktok-bulk-downloader-desktop-app](https://github.com/minhchi1509/tiktok-bulk-downloader-desktop-app)

## Báo cáo lỗi

Nếu bạn gặp bất kỳ lỗi nào, vui lòng tạo một issue tại [GitHub Issues](https://github.com/minhchi1509/tiktok-bulk-downloader-desktop-app/issues).

## Cảm ơn

Cảm ơn bạn đã sử dụng TikTok Bulk Downloader! Nếu bạn thấy ứng dụng hữu ích, vui lòng để lại một ngôi sao ⭐ cho dự án trên GitHub.