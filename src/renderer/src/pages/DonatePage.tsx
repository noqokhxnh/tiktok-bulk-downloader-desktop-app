import { Card, CardBody, Button } from '@heroui/react'
import { Heart, QrCode, ArrowLeft } from 'lucide-react'
import { TechcombankQrImage } from '../assets/images'
import { Link } from 'react-router-dom'
import { PaypalIcon } from '@renderer/assets/icons'

const DonatePage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 animate-fade-in relative">
      <div className="absolute top-0 left-0">
        <Button
          as={Link}
          to="/"
          variant="light"
          startContent={<ArrowLeft size={20} />}
          className="font-medium"
        >
          Back
        </Button>
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-default-900 mb-4 flex items-center justify-center gap-3">
          <Heart className="text-danger fill-danger" size={36} />
          Support Me
        </h1>
        <p className="text-lg text-default-500 max-w-2xl mx-auto">
          If you find this tool helpful, please consider supporting me to keep it maintained and
          improved. Thank you!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* PayPal Section */}
        <Card className="hover:scale-105 hover:cursor-pointer transition-all duration-300">
          <CardBody className="p-8 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              {/* Fallback to text P since icon is missing */}
              <PaypalIcon width={30} height={30} />
            </div>

            <h3 className="text-2xl font-bold text-default-900 mb-4">PayPal</h3>

            <p className="text-default-500 mb-6">
              Support me via PayPal! Secure and trusted payment method worldwide.
            </p>

            {/* PayPal Info */}
            <div className="bg-default-100 p-4 rounded-lg mb-6">
              <p className="font-semibold text-default-700 text-lg">paypal.me/minhchi1509</p>
            </div>

            <Button
              as="a"
              href="https://paypal.me/minhchi1509"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              size="lg"
              className="w-full font-bold"
            >
              Donate via PayPal
            </Button>

            <p className="text-xs text-default-400 mt-4">
              Click the button to donate securely via PayPal
            </p>
          </CardBody>
        </Card>

        {/* Techcombank QR Section */}
        <Card className="hover:scale-105 hover:cursor-pointer transition-all duration-300">
          <CardBody className="p-8 text-center">
            <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <QrCode className="text-success h-8 w-8" />
            </div>

            <h3 className="text-2xl font-bold text-default-900 mb-4">Techcombank QR</h3>

            <p className="text-default-500 mb-6">
              Chuyển khoản qua QR Code Techcombank. Nhanh chóng và tiện lợi!
            </p>

            {/* QR Code */}
            <div className="bg-white p-2 rounded-lg border border-divider border-dashed mb-6 mx-auto w-48 h-48 flex items-center justify-center overflow-hidden">
              <img
                src={TechcombankQrImage}
                alt="Techcombank QR"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="space-y-3">
              <div className="bg-default-100 p-3 rounded-lg">
                <span className="font-semibold text-default-700">Ngân hàng: </span>
                <span className="text-default-600">Techcombank</span>
              </div>

              <div className="bg-default-100 p-3 rounded-lg">
                <span className="font-semibold text-default-700">Chủ tài khoản: </span>
                <span className="text-default-600">NGUYEN MINH CHI</span>
              </div>
            </div>

            <p className="text-xs text-default-400 mt-4">Quét mã QR để chuyển khoản nhanh chóng</p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default DonatePage
