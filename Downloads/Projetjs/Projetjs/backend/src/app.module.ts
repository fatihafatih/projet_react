import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentController } from './payment/payment.controller';
import { PaymentService } from './payment/payment.service';
import { PaymentModule } from './payment/payment.module';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { OrderModule } from './order/order.module';

@Module({
  imports: [PaymentModule, OrderModule],
  controllers: [AppController, PaymentController, OrderController],
  providers: [AppService, PaymentService, OrderService],
})
export class AppModule {}
