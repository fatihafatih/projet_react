// order.controller.ts
import { Body, Controller,Get} from '@nestjs/common';
import { CreateOrderDto } from './create-order.dto';  // Assurez-vous que ce DTO est bien défini et importé

@Controller('order')
export class OrderController {

    private readonly responseMessages = {
        success: { status: 'success', message: 'Payment successful' },
        failure: { status: 'failure', message: 'Payment failed' },
      };
  @Get()
  GETURL():any {
   
    // Si tous les champs sont remplis et valides, renvoyer une réponse de succès
    return this.responseMessages;
  }
}
export default OrderController;
