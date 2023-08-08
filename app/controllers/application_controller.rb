class ApplicationController < ActionController::Base
  add_flash_types :success, :danger, :warning
  before_action :require_login

  private
  def not_authenticated
    flash[:warning] = "権限がありません"
    redirect_to login_path
  end
end
