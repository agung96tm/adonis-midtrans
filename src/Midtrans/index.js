const midtransClient = require('midtrans-client')
const { AuthorizationException } = require('../Exceptions/MidtransException')

class Midtrans {
  constructor(Config) {
    this.snap = new midtransClient.Snap(Config.get('midtrans'))
  }

  /**
   * Get Token from snap Midtrans
   * 
   * @param {Object} transcationData 
   * 
   * @return {String}
   */
  async getSnapToken(transcationData) {
    const {token} = await this.createTransaction(transcationData)
    return token
  }

  /**
   * Get Redirect Url from snap Midtrans
   * @param {Object} transcationData 
   * 
   * @return {String}
   */
  async vtwebCharge(transcationData) {
    const { redirect_url } = await this.createTransaction(transcationData)
    return redirect_url
  }

  /**
   * Create Midtrans Transaction for get snap token and redirect_url
   * @param {Object} parameter 
   * 
   * @return {Object} 
   */
  async createTransaction(parameter) {
    try {
      return await this.snap.createTransaction(parameter)
    } catch (e) {
      throw AuthorizationException.invoke(e.ApiResponse.status_message, e.ApiResponse.status_code, 'E_INVALID_TRANSACTION')
    }
  }



  /**
   * Handle HTTP Notification from Midtrans
   * 
   * @param {Object} notificationJson 
   * 
   * @return {Object}
   */
  async notification(notificationJson) {
    try {
      return await this.snap.transaction.notification(notificationJson)
    } catch (e) {
      throw AuthorizationException.invoke(e.ApiResponse.status_message, e.ApiResponse.status_code, 'E_INVALID_NOTIFICATION')
    }
  }



  /**
   * Get Status Your Order or Transaction
   * @param {String | Int} orderId 
   * 
   * @return {Object}
   */
  async status(orderId) {
    try {
      return await this.snap.transaction.status(orderId)
    } catch (e) {
      throw AuthorizationException.invoke(e.ApiResponse.status_message, e.ApiResponse.status_code, 'E_INVALID_STATUS_TRANSACTION')
    }
  }

  /**
   * Cancel Your Order or Transaction
   * @param {String | Int} orderId 
   * 
   * @return {Object}
   */
  async cancel(orderId) {
    try {
      return await this.snap.transaction.cancel(orderId)
    } catch (e) {
      throw AuthorizationException.invoke(e.ApiResponse.status_message, e.ApiResponse.status_code, 'E_INVALID_CANCEL_TRANSACTION')
    }
  }

  /**
   * Expire Your Order or Transaction
   * @param {String | Int} orderId 
   * 
   * @return {Object}
   */
  async expire(orderId) {
    try {
      return await this.snap.transaction.expire(orderId)
    } catch (e) {
      throw AuthorizationException.invoke(e.ApiResponse.status_message, e.ApiResponse.status_code, 'E_INVALID_EXPIRE_TRANSACTION')
    }
  }

  /**
   * Refund Your Order or Transaction
   * @param {String | Int } orderId 
   * @param {Object} parameters 
   * 
   * @return {Object}
   */
  async refund(orderId, parameters) {
    try {
      return await this.snap.transaction.refund(orderId, parameters)
    } catch (e) {
      throw AuthorizationException.invoke(e.ApiResponse.status_message, e.ApiResponse.status_code, 'E_INVALID_REFUND_TRANSACTION')
    }
  }

  /**
   * Approve a credit card transaction with `challenge` fraud status
   * @param {String | Int } orderId 
   * 
   * @return {Object}
   */
  async approve(orderId) {
    try {
      return await this.snap.transaction.approve(orderId)
    } catch (e) {
      throw AuthorizationException.invoke(e.ApiResponse.status_message, e.ApiResponse.status_code, 'E_INVALID_APPROVE_TRANSACTION')
    }
  }

  /**
   * Deny a credit card transaction with `challenge` fraud status
   * @param {String | Int } orderId 
   * 
   * @return {Object}
   */
  async deny(orderId) {
    try {
      return await this.snap.transaction.deny(orderId)
    } catch (e) {
      throw AuthorizationException.invoke(e.ApiResponse.status_message, e.ApiResponse.status_code, 'E_INVALID_DENY_TRANSACTION')
    }
  }
}

module.exports = Midtrans