from diagrams import Diagram
from diagrams.aws.compute import EC2
from diagrams.aws.database import RDS
from diagrams.aws.network import ELB

with Diagram("file", show=False, direction="TB"):
    (
        ELB("lb")
        >> [
            EC2("Buenos dias"),
            EC2("morning"),
            EC2("mama huevo"),
            EC2("fsdf"),
        ]
        >> RDS("events")
    )
