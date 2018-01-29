class TrumpsController < ApplicationController
  before_action :set_trump, only: [:show, :edit, :update, :destroy]

  # GET /trumps
  # GET /trumps.json
  def index
    @trumps = Trump.all
  end

  # GET /trumps/1
  # GET /trumps/1.json
  def show
  end

  # GET /trumps/new
  def new
    @trump = Trump.new
  end

  # GET /trumps/1/edit
  def edit
  end

  # POST /trumps
  # POST /trumps.json
  def create
    @trump = Trump.new(trump_params)

    respond_to do |format|
      if @trump.save
        format.html { redirect_to @trump, notice: 'Trump was successfully created.' }
        format.json { render :show, status: :created, location: @trump }
      else
        format.html { render :new }
        format.json { render json: @trump.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /trumps/1
  # PATCH/PUT /trumps/1.json
  def update
    respond_to do |format|
      if @trump.update(trump_params)
        format.html { redirect_to @trump, notice: 'Trump was successfully updated.' }
        format.json { render :show, status: :ok, location: @trump }
      else
        format.html { render :edit }
        format.json { render json: @trump.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /trumps/1
  # DELETE /trumps/1.json
  def destroy
    @trump.destroy
    respond_to do |format|
      format.html { redirect_to trumps_url, notice: 'Trump was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_trump
      @trump = Trump.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def trump_params
      params.require(:trump).permit(:name, :value)
    end
end
