sudo su --切换到root用户
sudo vi /etc/resolv.conf --dns设置
vi /etc/resolvconf/resolv.conf.d/base 
修改 IP 地址
即时生效:
# ifconfig eth0 192.168.0.2 netmask 255.255.255.0
启动生效:
修改 /etc/sysconfig/network-scripts/ifcfg-eth0
修改网关 Default Gateway
即时生效:
# route add default gw 192.168.0.1 dev eth0
启动生效:
修改 /etc/sysconfig/network
修改 DNS
修改/etc/resolv.conf
修改后可即时生效，启动同样有效
修改 host name
即时生效:
# hostname centos1
启动生效:
修改/etc/sysconfig/network
修改网卡配置
#vi /etc/udev/rules.d/70-persistent-net.rules
修改完以后你必须重新启动一下网络设置
# service network restart
或
# /etc/init.d/network restart
如果此时还不能连接，可以尝试打开一下20的端口 因为在Xshell我们设置的时候是默认端口22(虽然大部分时候这个端口是打开的)
/etc/init.d/sshd start
如果还不行 也许是防火墙没有关闭 我们只能果断的关闭它 
1) 重启后生效 
开启： chkconfig iptables on 
关闭： chkconfig iptables off 

2) 即时生效，重启后失效 
开启： service iptables start 
关闭： service iptables stop