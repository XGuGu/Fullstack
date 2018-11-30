class Api::PinsController < ApplicationController

  def index
    # debugger
    if params[:userId]
      @pins = User.find(params[:userId]).pins
    elsif params[:description]
      query_string = "%#{params[:description]}%".downcase
      @pins = Pin.where("LOWER(description) LIKE ?", query_string)
    else
      @pins = Pin.all
    end
  end

  def show
    @pin = Pin.find(params[:id])
    render :show
  end

  def create
    # debugger
    @pin = Pin.new(pin_params)
    @pin.author_id = current_user.id
    if @pin.save
      Pinboard.create!({pin_id: @pin.id, board_id: params[:boardId]})
      render :show
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def update
    @pin = current_user.pins.find(params[:id])
    if @pin
      if @pin.update(pin_params)
        render :show
      else
        render json: @pin.errors.full_messages, status: 422
      end
    else
      render json: ["No permission"], status: 401
    end
  end

  def destroy
    @pin = current_user.pins.find(params[:id])
    if @pin
      @pin.destroy
    else
      render json: ["No permission"], status: 401
    end
  end

  private

  def pin_params
    params.require(:pin).permit(:description, :website_url, :url, :author_id)
  end
end
