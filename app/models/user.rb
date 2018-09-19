class User < ApplicationRecord

  validates :password_digest, :session_token, :username, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6}, allow_nil: true

  has_many :pins,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Pin

  has_many :boards,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Board

  attr_reader :password

  after_initialize :ensure_session_token, :ensure_img

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token || reset_session_token!
  end

  def ensure_img
    if !!self.image_url
      return
    else
      self.image_url = "https://s.pinimg.com/images/user/default_280.png"
    end
  end
end
