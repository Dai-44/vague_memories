class UserSessionsController < ApplicationController
  skip_before_action :require_login, only: %i[new create guest_login]
  
  def new; end

  def create
    @user = login(params[:email], params[:password])
    if @user
      redirect_back_or_to root_path, success: t('.success')
    else
      flash.now[:danger] = t('.fail')
      render :new
    end
  end

  def guest_login
    @guest_user = User.create(
      name: "ゲスト",
      email: SecureRandom.alphanumeric(20) + "@email.com",
      password: "password",
      password_confirmation: "password"
    )
    auto_login(@guest_user)
    redirect_to new_post_path, success: "ゲストログインしました"
  end

  def destroy
    logout
    redirect_to root_path, success: t('.success')
  end
end
